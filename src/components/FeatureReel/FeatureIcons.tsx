interface IconProps {
    className?: string;
}

export function DashboardIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="9" />
            <rect x="14" y="3" width="7" height="5" />
            <rect x="14" y="12" width="7" height="9" />
            <rect x="3" y="16" width="7" height="5" />
        </svg>
    );
}

export function InvoiceIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v16H4z" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="14" y2="12" />
            <line x1="8" y1="16" x2="12" y2="16" />
        </svg>
    );
}

export function DeliveryIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="12" r="3" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
            <path d="M12 4v2" />
            <path d="M12 18v2" />
        </svg>
    );
}

export function StripeIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <line x1="6" y1="15" x2="10" y2="15" />
        </svg>
    );
}

export function ClientsIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            <line x1="17" y1="11" x2="21" y2="11" />
            <line x1="19" y1="9" x2="19" y2="13" />
        </svg>
    );
}

export function ReceiptsIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v16l-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2V4z" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
        </svg>
    );
}

export function getFeatureIcon(featureId: string) {
    switch (featureId) {
        case 'dashboard':
            return DashboardIcon;
        case 'invoice':
            return InvoiceIcon;
        case 'delivery':
            return DeliveryIcon;
        case 'stripe':
            return StripeIcon;
        case 'clients':
            return ClientsIcon;
        case 'receipts':
            return ReceiptsIcon;
        default:
            return DashboardIcon;
    }
}
