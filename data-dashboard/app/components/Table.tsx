'use client'
import TableRow from "./TableRow"

const DUMMY_COUNTRIES = [
  { country: "Canada", flag: "🇨🇦", region: "Americas", code: "CAN" },
  { country: "Japan", flag: "🇯🇵", region: "Asia", code: "JPN" },
  { country: "Germany", flag: "🇩🇪", region: "Europe", code: "DEU" },
  { country: "Australia", flag: "🇦🇺", region: "Oceania", code: "AUS" },
  { country: "South Africa", flag: "🇿🇦", region: "Africa", code: "ZAF" },
];

const Table = () => {
    const headings = ["S.No", "Country", "Region", "Code", "View Details"]
    
  return (
    <div className="w-full max-w-4xl mx-auto overflow-x-auto border border-border/50 rounded-2xl shadow-2xl bg-card/30 backdrop-blur-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/60">
      <table className="w-full min-w-[600px] text-left border-collapse">
        <thead className="border-b border-border/30 bg-muted/40">
          <tr>
            {headings.map((heading) => (
                <th key={heading} className="px-4 py-3.5 font-bold text-muted-foreground text-xs uppercase tracking-wider">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/20">
          {DUMMY_COUNTRIES.map((item, index) => (
            <TableRow
              key={item.code}
              sNo={index + 1}
              country={item.country}
              flag={item.flag}
              region={item.region}
              code={item.code}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table