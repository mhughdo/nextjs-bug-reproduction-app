type ImgixLoader = {
    src: string
    width: number
    quality: number
  }

  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  export default function imgixLoader({ src, width, quality }: ImgixLoader) {
    const url = new URL(`https://hughdo-dev.imgix.net${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 50).toString())
    return url.href
  }
