export interface Face {
    msg?:  string;
    body?: Body[];
}

export interface Body {
    id?:          number;
    name?:        string;
    probability?: number;
    rectangle?:   Rectangle;
}

export interface Rectangle {
    left?:   number;
    top?:    number;
    right?:  number;
    bottom?: number;
}
