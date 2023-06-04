export interface Transaction {
  id: string;
  userAccount: string;
  destinationAccount: string;
  userBank: string;
  destinationBank: string;
  amount: number;
}

export enum TransactionType {
  Internal = 'internal',
  InternalCombined = 'internalCombined',
  External = 'extenal',
  Combined = 'combined',
}

export enum TransactionStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed',
  Recurrent = 'recurrent',
}
