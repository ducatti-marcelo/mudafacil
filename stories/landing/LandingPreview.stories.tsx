import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/ui/button'
import { Truck, Box, Sofa, Refrigerator, Home } from 'lucide-react'

const LandingPreview: React.FC = () => {
  return (
    <section style={{ padding: '48px 20px', background: 'var(--background)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.1, color: '#0F172A' }}>
              Arraste seus móveis, escolha o caminhão e mude sem estresse
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', marginTop: 8 }}>
              Monte visualmente a carga da sua mudança com drag & drop, compare tamanhos de caminhão em tempo real e receba cotações instantâneas de transportadoras avaliadas.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <Button>Começar Grátis</Button>
              <Button variant="outline">Ver Como Funciona</Button>
            </div>
          </div>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: 12, padding: 16, background: '#fff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, alignItems: 'center' }}>
              {['Fiorino','HR','3/4','Baú'].map((n,i)=> (
                <div key={i} style={{ textAlign:'center', padding:6, borderRadius:8, background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,.25)' }}>
                  <Truck size={16} />
                  <div style={{ fontSize:12, marginTop:6 }}>{n}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 12 }} />
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
              {[
                {label:'Cama'}, {label:'Cadeira'}, {label:'Sofá'}, {label:'Caixas'}
              ].map((it, idx)=> (
                <div key={idx} style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:6, borderRadius:8, border:'1px solid #EEE', background:'#fff' }}>
                  <Box size={14} />
                  <span style={{ fontSize:11, marginTop:6 }}>{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const LandingMeta: Meta<typeof LandingPreview> = {
  title: 'Landing Preview/Visual',
  component: LandingPreview,
}

export default LandingMeta
export type Story = StoryObj<typeof LandingMeta>
export const Default: Story = {}
