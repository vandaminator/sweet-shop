// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface signInResponse {
    id:                   string;
    aud:                  string;
    role:                 string;
    email:                string;
    phone:                string;
    confirmation_sent_at: string;
    app_metadata:         AppMetadata;
    user_metadata:        UserMetadata;
    identities:           Identity[];
    created_at:           string;
    updated_at:           string;
}

export interface AppMetadata {
    provider:  string;
    providers: string[];
}

export interface Identity {
    identity_id:     string;
    id:              string;
    user_id:         string;
    identity_data:   IdentityData;
    provider:        string;
    last_sign_in_at: string;
    created_at:      string;
    updated_at:      string;
    email:           string;
}

export interface IdentityData {
    email:          string;
    email_verified: boolean;
    phone_verified: boolean;
    sub:            string;
}

export interface UserMetadata {
}
