import { config } from 'dotenv';

export function envConfig() {
    // Load environment variables from multiple .env files
    config({ path: '.env.local' });
    config({ path: '.env' });
}