import * as React from 'react'

type Row = { id: string; a: string; b: string }

export function DensityTable({ density = 'compact', rows = [] as Row[] }: { density?: 'compact'|'comfortable'|'cozy'; rows?: Row[] }) {
  const height = density === 'compact' ? 28 : density === 'cozy' ? 40 : 56
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #E2E8F0' }}>Coluna A</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #E2E8F0' }}>Coluna B</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} style={{ height }}>
            <td style={{ padding: '8px', borderTop: '1px solid #EEE' }}>{r.a}</td>
            <td style={{ padding: '8px', borderTop: '1px solid #EEE' }}>{r.b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
