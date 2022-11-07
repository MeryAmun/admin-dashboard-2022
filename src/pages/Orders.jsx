import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Page, Sort,ContextMenu,Filter, ExcelExport, PdfExport, Edit,Inject} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems,ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { sort } from '@syncfusion/ej2-react-charts';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Orders' category='Page'/>
      <GridComponent 
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      // allowExcelExport
      // allowFiltering
      // allowPdfExport
      
      >
      <ColumnsDirective>
      {
        ordersGrid.map((item, index) => (
          <ColumnDirective key={index}  {...item}/>
        ))
      }
      </ColumnsDirective>
      <Inject services={[Sort,Resize, Page,Edit, ExcelExport,PdfExport, ContextMenu,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Orders