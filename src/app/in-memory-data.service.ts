import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Target } from './models/target';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const targets = [
      { id: 11, 
        name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01"
          },

      { id: 12, name: 'Bill International', 
      status: "Researching", 
      companyAddress: {
        street: "111 Brownlee Rd.", 
        city: "Atlanta", 
        state: "GA", 
        zipCode: "20202"
      }, 
      companyInfo: "This is an Accounting Firm", 
      keyContacts: [
        {
          name: 'John Doe', 
          phoneNumber:'828-554-2200'
        }, 
        {
          name: 'Jill Anderson', 
          phoneNumber:'777-913-1003'
        }, 
        {
          name: 'Suzanne Whichet', 
          phoneNumber:'833-244-4004'
        }
      ], 
      financialPerformance: {
        revenue: "$100,000", 
        expenses: "$50,000"
      },
      dateLastUpdated: "2019-01-01" },

      { id: 13,  name: 'Lewisvill Banking', 
      status: "Researching", 
      companyAddress: {
        street: "1928 Washington Blvd.", 
        city: "Seatle", 
        state: "WA", 
        zipCode: "98748"
      }, 
      companyInfo: "This is a bank", 
      keyContacts: [
        {
          name: 'Hillary Smith', 
          phoneNumber:'828-554-2200'
        }, 
        {
          name: 'James Jameson', 
          phoneNumber:'777-913-1003'
        },
      ], 
      financialPerformance: {
        revenue: "$10,000", 
        expenses: "$50,000"
      },
      dateLastUpdated: "2019-01-01"},

      { id: 14, name: 'Lewisvill Banking', 
      status: "Researching", 
      companyAddress: {
        street: "1928 Washington Blvd.", 
        city: "Seatle", 
        state: "WA", 
        zipCode: "98748"
      }, 
      companyInfo: "This is a bank", 
      keyContacts: [
        {
          name: 'Hillary Smith', 
          phoneNumber:'828-554-2200'
        }, 
        {
          name: 'James Jameson', 
          phoneNumber:'777-913-1003'
        },
      ], 
      financialPerformance: {
        revenue: "$10,000", 
        expenses: "$50,000"
      },
      dateLastUpdated: "2019-01-01" },
      { id: 15, name: 'Bill International', 
      status: "Researching", 
      companyAddress: {
        street: "111 Brownlee Rd.", 
        city: "Atlanta", 
        state: "GA", 
        zipCode: "20202"
      }, 
      companyInfo: "This is an Accounting Firm", 
      keyContacts: [
        {
          name: 'John Doe', 
          phoneNumber:'828-554-2200'
        }, 
        {
          name: 'Jill Anderson', 
          phoneNumber:'777-913-1003'
        }, 
        {
          name: 'Suzanne Whichet', 
          phoneNumber:'833-244-4004'
        }
      ], 
      financialPerformance: {
        revenue: "$100,000", 
        expenses: "$50,000"
      },
      dateLastUpdated: "2019-01-01"},

      { id: 16, name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01"},

      { id: 17, name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01"},

      { id: 18, name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01" },

      { id: 19, name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01" },

      { id: 20, name: 'Smith Accounting', 
            status: "Researching", 
            companyAddress: {
              street: "7428 Creek Rd.", 
              city: "New York", 
              state: "NY", 
              zipCode: "36945"
            }, 
            companyInfo: "This is an Accounting Firm", 
            keyContacts: [
              {
                name: 'Willy Smithson', 
                phoneNumber:'877-524-2200'
              }, 
              {
                name: 'Anderson Jillington', 
                phoneNumber:'777-913-1003'
              }, 
              {
                name: 'Suzanne Whichet', 
                phoneNumber:'899-484-5758'
              }
            ], 
            financialPerformance: {
              revenue: "$200,000", 
              expenses: "$150,000"
            },
            dateLastUpdated: "2019-01-01"}
    ];
    return {targets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(targets: Target[]): number {
    return targets.length > 0 ? Math.max(...targets.map(target => target.id)) + 1 : 11;
  }
}