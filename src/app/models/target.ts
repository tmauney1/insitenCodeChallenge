import { KeyContact } from './key-contact';
import { Address } from './address';
import { FinancialIdicators } from './financial-idicators';

export class Target {
    
    id: number;

    name: string;

    status: string;

    companyAddress: Address;

    companyInfo: string;

    keyContacts: KeyContact[];

    financialPerformance: FinancialIdicators;
    
    dateLastUpdated: Date;

  }