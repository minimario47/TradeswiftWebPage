interface IconProps {
    className?: string;
}

export function DashboardIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="8" height="8" />
            <rect x="13" y="3" width="8" height="8" />
            <rect x="3" y="13" width="18" height="8" />
        </svg>
    );
}

export function InvoiceIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h10l6 6v10H4z" />
            <path d="M14 4v6h6" />
        </svg>
    );
}

export function DeliveryIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    );
}

export function StripeIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="6" width="18" height="4" fill="currentColor" />
            <rect x="3" y="14" width="18" height="4" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

export function ClientsIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
    );
}

export function ReceiptsIcon({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4v16" />
            <path d="M20 4v16" />
            <path d="M8 8h8" />
            <path d="M8 12h8" />
            <path d="M8 16h5" />
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
