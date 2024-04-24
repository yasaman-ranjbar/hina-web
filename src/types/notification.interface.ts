export interface Notification {
    id: string; // this property for delete
    duration?: number;
    message: string;
    type: NotificationType;
}


export type NotificationType = "success" | "error" | "warning" | "info"