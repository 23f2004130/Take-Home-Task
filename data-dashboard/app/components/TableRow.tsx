'use client'
import React from 'react'
import Link from 'next/link'

interface TableRowProps {
  sNo: number;
  country: string;
  region: string;
  code: string;
}

const TableRow = ({ sNo, country, region, code }: TableRowProps) => {
  return (
    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors text-foreground">
      <td className="px-4 py-3.5 text-sm text-muted-foreground font-medium">{sNo}</td>
      <td className="px-4 py-3.5 text-sm font-semibold flex items-center gap-2 text-foreground">
        
        <span>{country}</span>
      </td>
      <td className="px-4 py-3.5 text-sm text-muted-foreground">{region}</td>
      <td className="px-4 py-3.5 text-sm font-mono text-muted-foreground">{code}</td>
      <td className="px-4 py-3.5 text-sm">
        <Link 
          href={`/country/${code.toLowerCase()}`}
          className="inline-flex items-center justify-center bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg border border-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          View Details →
        </Link>
      </td>
    </tr>
  )
}

export default TableRow