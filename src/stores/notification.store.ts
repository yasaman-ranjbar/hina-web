import { Notification } from "@/types/notification.interface"
import { generateId } from "@/utils/string";
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type NotificationSate = {
    notifications: Notification[]; //state
    showNotification: (notification: Omit<Notification, 'id'>) => void; // receive arguman and add state
    dismissNotification: (id: string) => void;
}

// when change state use set method and for access to state use get
export const useNotificationStore = create<NotificationSate>()(devtools((set, get) => ({
    notifications: [], //initial state
    showNotification: (notif) => {
        const id = generateId();
        set(state => ({
            notifications: [...state.notifications, { id, ...notif }]
        }));

        setTimeout(() => {
            get().dismissNotification(id)
        }, 5000);
    },
    dismissNotification: (id) => { //delete notif
        set(state => ({
            notifications: state.notifications.filter((p) => p.id !== id),
        }));
    },
})));