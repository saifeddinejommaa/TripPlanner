

 export class PagedResult<T extends object | null> {
    public TotalRows:number=0;
    public PageCount:number=0;
    public  PageSize: number |undefined;
    public  Results :Array<T> |undefined;

    public constructor(result:Array<T>, pagesSize: number| undefined, totalRows:number ){
             this.TotalRows = totalRows;
             this.PageSize = pagesSize;
             this.Results = result;
             this.PageCount = pagesSize != 0 && pagesSize != undefined ? Math.ceil(totalRows/pagesSize):1;
    }

  }