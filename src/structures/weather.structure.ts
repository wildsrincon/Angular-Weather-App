export interface Weather {
    name ?: string;
    cod ?: number;
    icon ?: string;
    description ?: string;
    temp ?: number;
    main ?: string;
    minMaxTemp ?: minMaxInterface; 
}

interface minMaxInterface {
    date ?: number;
    day ?: number;
    month ?: number;
    min ?: number;
    max ?: number; 
}