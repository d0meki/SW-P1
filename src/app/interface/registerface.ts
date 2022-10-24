export interface RegisterFace {
    msg:  string;
    body: BodyFace;
}

export interface BodyFace {
    status:  string;
    uuid:    string;
    id:      number;
    message: string;
    url:     string;
}
