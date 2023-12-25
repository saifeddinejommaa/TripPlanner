import {PagingPatameter} from "@aprilium/tripsm_common/lib/models/PagingParameter";
interface PassengersParameter extends PagingPatameter{
     pageSize: number, 
     pageNumber: number,
     sortColumn: string,
     SortOrder: 'ASC' | 'DESC';
     table: number, 
     dropdown: number,
     all: boolean
}

export default PassengersParameter;