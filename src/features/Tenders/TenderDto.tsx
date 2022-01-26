
export type Ranks= ("Active"|"Ended"|"Frozen")
export type Status= ("Active"|"Ended"|"Frozen"|"NotStarted")
export default class TenderDto {

    public Id!: number;
    public EndDate?: string;
    public StartDate?: string;
    public Name?: string;
    public TenderNumber!: string;
    public IsQualityTender?: boolean;
    public CurrencyId?:string;
    public Time?: number ;
    public TotalToLead?: number | undefined;
    public RankInfo!: Ranks;// האם מכרז מוביל או לא
    public UserLastPropositionTotal?: number
    public Statuses!: Status;
}
