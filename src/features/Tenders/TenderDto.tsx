
export type Ranks= ("A"|"B"|"C")

export default class TenderDto {

    public Id!: number;
    public EndDate?: string;
    public StartDate?: string;
    public Name?: string;
    public IsQualityTender?: boolean;
    public CurrencyId?:string;
    public  Time?: number;
    public TotalToLead?: number;
    public RankInfo?: Ranks;
    public UserLastPropositionTotal?: number

}
