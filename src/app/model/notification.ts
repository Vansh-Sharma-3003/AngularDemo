export interface Notification {
    timestamp: any;
    id: number,
    read: boolean,
    text: string,
    date: string
}


export interface NotificationResponse {
    unreadCount: number;
    notifications: Notification[];
}