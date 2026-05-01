import type { TooltipStyle } from './types'

export function clamp(n: number, a: number, b: number) {
    return Math.max(a, Math.min(b, n))
}

export function toStr(v: any) {
    if (v === null || v === undefined) return '—'
    return String(v)
}

export function getFontPx(font: string) {
    const m = /(\d+)px/.exec(font)
    return m ? Number(m[1]) : 12
}

export function withAlpha(hex: string, opacity: number) {
    const h = hex.replace('#', '').trim()
    if (!(h.length === 3 || h.length === 6)) return hex
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
    const r = parseInt(full.slice(0, 2), 16)
    const g = parseInt(full.slice(2, 4), 16)
    const b = parseInt(full.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
    if (maxWidth <= 0) return ''
    if (ctx.measureText(text).width <= maxWidth) return text
    const ell = '…'
    let lo = 0
    let hi = text.length
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2)
        const s = text.slice(0, mid) + ell
        if (ctx.measureText(s).width <= maxWidth) lo = mid + 1
        else hi = mid
    }
    return text.slice(0, Math.max(0, lo - 1)) + ell
}

function isPlainObject(x: any) {
    return x && typeof x === 'object' && !Array.isArray(x)
}

export function deepMerge<T extends any>(base: T, patch?: any): T {
    if (!patch) return base
    const out: any = Array.isArray(base) ? [...base] : { ...base }
    for (const k of Object.keys(patch)) {
        const pv = patch[k]
        const bv = (base as any)[k]
        if (isPlainObject(bv) && isPlainObject(pv)) out[k] = deepMerge(bv, pv)
        else if (pv !== undefined) out[k] = pv
    }
    return out
}

/* tooltip position: opposite diagonal */
export function computeTooltipPos(args: {
    mouseX: number
    mouseY: number
    plotW: number
    plotH: number
    tooltipW: number
    tooltipH: number
    offset: number
}) {
    const { mouseX, mouseY, plotW, plotH, tooltipW, tooltipH, offset } = args

    const dTL = mouseX * mouseX + mouseY * mouseY
    const dTR = (plotW - mouseX) * (plotW - mouseX) + mouseY * mouseY
    const dBL = mouseX * mouseX + (plotH - mouseY) * (plotH - mouseY)
    const dBR = (plotW - mouseX) * (plotW - mouseX) + (plotH - mouseY) * (plotH - mouseY)
    const min = Math.min(dTL, dTR, dBL, dBR)

    let left = mouseX
    let top = mouseY

    if (min === dTL) {
        left = mouseX + offset
        top = mouseY + offset
    } else if (min === dTR) {
        left = mouseX - offset - tooltipW
        top = mouseY + offset
    } else if (min === dBL) {
        left = mouseX + offset
        top = mouseY - offset - tooltipH
    } else {
        left = mouseX - offset - tooltipW
        top = mouseY - offset - tooltipH
    }

    left = clamp(left, 6, plotW - tooltipW - 6)
    top = clamp(top, 6, plotH - tooltipH - 6)

    return { left, top }
}

// ... (твой текущий код utils.ts)

// более точная оценка размеров tooltip по тексту
export function estimateTooltipSize(
    ctx: CanvasRenderingContext2D,
    t: TooltipStyle,
    title: string,
    lines: string[]
) {
    let maxTextW = ctx.measureText(title).width
    for (const l of lines) maxTextW = Math.max(maxTextW, ctx.measureText(l).width)

    const w = Math.min(t.maxWidth, Math.ceil(maxTextW + t.paddingX * 2))
    // +6 чтобы учесть небольшой отступ после заголовка (у тебя marginBottom: 6)
    const h = Math.ceil(t.paddingY * 2 + t.lineHeight * (1 + lines.length) + 6)

    return { w, h }
}