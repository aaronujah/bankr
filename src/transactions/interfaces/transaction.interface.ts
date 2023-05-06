export interface Transaction {
  id: string;
  userAccount: string;
  destinationAccount: string;
  userBank: string;
  destinationBank: string;
  amount: number;
}
