import Grid from '../components/Grid'
import type { GridColumns } from '@mui/x-data-grid-premium'
import { identifiedVendorData, nestedColumns } from '../data/gridMockData'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import type { DataGridPremiumProps } from '@mui/x-data-grid-premium'
import { useCallback } from 'react'

type VendorDetail = typeof identifiedVendorData[number]

function DetailPanelContent({ row: rowProp }: { row: VendorDetail }) {
    return (
        <Stack className='nestedGridWrapper' direction='column'>
            <Paper className='nestedGridPaper'>
                <Stack direction='column' spacing={1}>
                    <Grid
                        columnData={nestedColumns}
                        rowData={rowProp.details}
                        hideFooter
                        classString='nestedGrid'
                        disableColumnMenu={true}
                    />
                </Stack>
            </Paper>
        </Stack>
    )
}

export default function Index() {
    const vendorColumns: GridColumns = [
        {
            field: 'vendorName',
            headerClassName: 'basicGridHeader',
            flex: 1,
            headerName: 'Vendor Name',
            renderCell: (params) => {
                return (<a href={'https://mui.com/x/react-data-grid/master-detail/'} aria-label='link to vendor details'>{params.row.vendorName}</a>)
            }
        },
        {
            field: 'internalId',
            headerClassName: 'basicGridHeader',
            flex: 1,
            headerName: 'Internal ID',
        },
        {
            field: 'pmgId',
            headerClassName: 'basicGridHeader',
            flex: 1,
            headerName: 'Company ID',
        },
        {
            field: 'email',
            headerClassName: 'basicGridHeader',
            flex: 1.5,
            headerName: 'Email Address',
        },
        {
            field: 'accountNumber',
            headerClassName: 'basicGridHeader',
            flex: 1,
            headerName: 'Account Number',
        },
        {
            field: 'status',
            headerClassName: 'basicGridHeader lastColumnHeader',
            cellClassName: (params) => {
                return `uppercase ${params.row.status} lastColumnMasterDetail`
            },
            flex: .5,
            headerName: 'Status',
        }
    ]

    const getDetailPanelContent: DataGridPremiumProps['getDetailPanelContent'] =
        useCallback(({ row }) => <DetailPanelContent row={row} />, [])

    const getDetailPanelHeight = useCallback(() => 150, [])

    return (
        <div>
            <Grid
                columnData={vendorColumns}
                rowData={identifiedVendorData}
                rowClassString='masterDetailGridRow'
                initialPageSize={10}
                getDetailPanelHeight={getDetailPanelHeight}
                getDetailPanelContent={getDetailPanelContent}
                classString='masterDetailGrid'
                showFirstButton={false}
                showLastButton={false}
            />
        </div>
    )
}
