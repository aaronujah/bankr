export class CreateTransactionDto {
  readonly userAccount: string;
  readonly destinationAccount: string;
  readonly userBank: string;
  readonly destinationBank: string;
  readonly amount: number;
}
