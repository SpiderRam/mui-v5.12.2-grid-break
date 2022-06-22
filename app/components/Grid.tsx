import { TablePagination } from '@mui/material'
import type { GridColumns, GridRowParams, GridRowsProp} from '@mui/x-data-grid-premium'
import { DataGridPremium } from '@mui/x-data-grid-premium'
import type { ChangeEvent, ReactNode, MouseEvent} from 'react'
import { useState } from 'react'

type PmgGridProps = {
    columnData: GridColumns,
    rowData: GridRowsProp,
    hideFooter?: boolean,
    classString?: string,
    disableColumnMenu?: boolean,
    rowClassString?: string,
    initialPageSize?: number,
    getDetailPanelHeight?: ((params: GridRowParams) => number) | undefined,
    getDetailPanelContent?: (params: GridRowParams) => ReactNode | undefined,
    showFirstButton?: boolean,
    showLastButton?: boolean
}

export default function PmgGrid({
    columnData,
    rowData,
    initialPageSize = 20,
    getDetailPanelHeight,
    getDetailPanelContent,
    hideFooter,
    classString,
    rowClassString,
    disableColumnMenu,
    showFirstButton = true,
    showLastButton = true
}: PmgGridProps) {
    const [pageSize, setPageSize] = useState<number>(initialPageSize)
    const data = {
        columnData,
        rows: rowData
    }
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(initialPageSize)

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(Number(event.target.value))
        setPageSize(Number(event.target.value))
        setPage(0)
    }

    function CustomPagination() {
        return (
            <table>
                <tbody>
                    <tr>
                        <TablePagination
                            count={data.rows.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            showFirstButton={showFirstButton}
                            showLastButton={showLastButton}
                            rowsPerPageOptions={[initialPageSize]}
                        />
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <DataGridPremium
                {...data}
                className={classString}
                columns={columnData}
                getRowClassName={(params) => {
                    const gray = rowClassString ? `${rowClassString} grayRow` : 'grayRow'
                    const white = rowClassString ? `${rowClassString} whiteRow` : 'whiteRow'
                    return params.indexRelativeToCurrentPage % 2 === 0 ? white : gray
                }}
                pagination={true}
                page={page}
                pageSize={pageSize}
                autoHeight
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[initialPageSize]}
                loading={data.rows.length === 0}
                disableSelectionOnClick
                getDetailPanelContent={getDetailPanelContent}
                getDetailPanelHeight={getDetailPanelHeight}
                hideFooter={hideFooter}
                components={{ Pagination: CustomPagination }}
                disableColumnMenu={disableColumnMenu}
            />
        </div>
    )
}
