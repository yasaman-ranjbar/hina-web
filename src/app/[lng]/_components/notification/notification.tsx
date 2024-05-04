"use client";

import { useNotificationStore } from "@/stores/notification.store";
import { NotificationProps } from "./notification.types";
import { NotificationToast } from "./notification.toast";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  if (notifications.length < 1) return null;

  return (
    <div className="fixed flex top-3 right-3 gap-3">
      {notifications.map((p) => {
        return (
          <NotificationToast key={`notification-${p.id}`} notification={p} />
        );
      })}
    </div>
  );
};
