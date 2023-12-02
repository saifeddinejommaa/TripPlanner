export class PaginPatameter{

    private pageSize :number=25;
    public  pageNumber :number=1;
    public sortColumn :string|undefined;
    public sortOrder :string|undefined; //"DESC" vs "ASC"
    public table:number|undefined;
    public dropdown:number|undefined;
    public all:boolean;

    public constructor(pageSize: number, pageNumber:number,sortColumn:string|undefined,
        sortOrder :string|undefined,table:number|undefined,dropdown:number|undefined, all:boolean ){
             this.pageSize = pageSize != undefined && pageSize <=0 ? 10 : pageSize;
             this.pageNumber = pageNumber;
             this.sortColumn = sortColumn;
             this.sortOrder = sortOrder;
             this.table = table;
             this.all = all;
    }

  }