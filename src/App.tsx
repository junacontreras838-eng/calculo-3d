import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import diskMethodImage from './assets/metodo-disco-transparente.png'
import shellMethodImage from './assets/metodo-cascarones-estilo-simple.png'
import basicWasherImage from './assets/metodo-arandela-transparente.png'
import integralFormulaImage from './assets/formula-integral-compacta.png'
import secondIntegralFormulaImage from './assets/formula-integral-segundo-paso.png'
import thirdIntegralFormulaImage from './assets/formula-integral-tercer-paso.png'
import fourthIntegralFormulaImage from './assets/formula-integral-cuarto-paso.png'
import diskKeyFormulaImage from './assets/formula-clave-discos.png'
import diskCalculatorFormulaImage from './assets/formula-calculadora-discos.png'

type Exercise = {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  accent: string
  soft: string
  border: string
  problem: string
  formula: string
  result: string
  geogebra: string
  video: string
  steps: { title: string; text: string; math: string }[]
}

const exercises: Exercise[] = [
  {
    id: 'prisma',
    number: '01',
    title: 'El prisma rectangular',
    subtitle: 'Volumen y área total',
    description: 'Aprende a medir un prisma a partir de sus tres dimensiones.',
    accent: '#ef6a4c',
    soft: '#fff3ee',
    border: '#ffd8ca',
    problem:
      'En el modelado geométrico de un núcleo óptico experimental, el radio de la sección transversal a lo largo de un tramo de 2 m está dado por la función f(x) = √(x + 1) en el intervalo x ∈ [0, 2]. Al girar esta región alrededor del eje X (y = 0), se genera el sólido de revolución que representa el volumen del núcleo.',
    formula: 'V = π ∫ₐᵇ [R(x)]² dx',
    result: 'V = 4π u³ ≈ 12.5664 u³',
    geogebra: 'https://www.geogebra.org/classic/nucbxr8j',
    video: 'https://www.youtube-nocookie.com/embed/Rh7sHOCY1W0?rel=0',
    steps: [
      {
        title: 'Sustituye la función y los límites',
        text: 'Usamos R(x) = f(x) = √(x + 1), con límite inferior a = 0 y límite superior b = 2.',
        math: 'π ∫₀² [√(x − 1)]² dx',
      },
      {
        title: 'Simplifica el cuadrado con la raíz',
        text: 'Al elevar la raíz al cuadrado, el integrando se simplifica a x + 1.',
        math: 'V = π ∫₀² (x + 1) dx',
      },
      {
        title: 'Integra término a término',
        text: 'Calculamos la antiderivada de x + 1 y conservamos los límites de integración.',
        math: 'V = π [x²/2 + x]₀²',
      },
      {
        title: 'Evalúa los límites',
        text: 'Evaluamos primero en x = 2 y después en x = 0 para obtener el volumen.',
        math: 'V = π[(2²/2 + 2) − (0²/2 + 0)] = 4π u³ ≈ 12.5664 u³',
      },
    ],
  },
  {
    id: 'piramide',
    number: '02',
    title: 'La pirámide cuadrangular',
    subtitle: 'Volumen desde la base',
    description: 'Descubre por qué una pirámide ocupa un tercio de un prisma.',
    accent: '#5468d4',
    soft: '#f1f2ff',
    border: '#d9ddff',
    problem:
      'Para aislar un bus de datos frente a interferencias en un rack de servidores, se analiza una estructura anular generada entre dos curvas en el intervalo x ∈ [0, 4]: el borde exterior modelado por f(x) = √x + 2 y el límite interior dado por g(x) = 1, rotando la región alrededor del eje X (y = 0).',
    formula: 'V = π ∫ₐᵇ [R(x)² − r(x)²] dx',
    result: 'V = 124π/3 u³ ≈ 129.8525 u³',
    geogebra: 'https://www.geogebra.org/classic/nexsm9wq',
    video: 'https://www.youtube-nocookie.com/embed/VjQcHwiLzks?rel=0',
    steps: [
      {
        title: 'Plantea la integral',
        text: 'Usamos el radio exterior R(x) = √x + 2 y el radio interior r(x) = 1 en el intervalo [0, 4].',
        math: 'V = π ∫₀⁴ [(√x + 2)² − (1)²] dx',
      },
      {
        title: 'Expande algebraicamente',
        text: 'Desarrollamos el cuadrado y restamos el radio interior al cuadrado.',
        math: '(√x + 2)² − 1 = x + 4√x + 4 − 1 = x + 4x^(1/2) + 3',
      },
      {
        title: 'Integra cada término',
        text: 'Calculamos la antiderivada de cada término y simplificamos sus coeficientes.',
        math: 'V = π [x²/2 + 8/3 · x^(3/2) + 3x]₀⁴',
      },
      {
        title: 'Evalúa en el límite superior',
        text: 'En x = 0 la expresión vale cero. Sustituimos x = 4, usando √4 = 2 y 2³ = 8.',
        math: 'V = π [4²/2 + 8/3 · (4)^(3/2) + 3(4)] = 124π/3 u³ ≈ 129.8525 u³',
      },
    ],
  },
  {
    id: 'cilindro',
    number: '03',
    title: 'Método de cascarones cilíndricos',
    subtitle: 'Volumen alrededor del eje Y',
    description: 'Calcula un volumen de revolución usando radios y alturas.',
    accent: '#16997e',
    soft: '#eaf9f5',
    border: '#c5eee5',
    problem:
      'En un módulo de memoria caché de un servidor, la densidad de acceso por bloques se modela mediante la curva y = 4x - x2 y el eje X (y = 0), en el primer cuadrante. Se hace girar esta región alrededor del eje Y para hallar el volumen del sólido de revolución.',
    formula: 'V = 2π ∫ₐᵇ x[f(x) − g(x)] dx',
    result: 'V = 128π/3 u³ ≈ 134.0413 u³',
    geogebra: 'https://www.geogebra.org/classic/uvjeq6nj',
    video: 'https://www.youtube-nocookie.com/embed/MzQpFHEJZ5Y?rel=0',
    steps: [
      {
        title: 'Halla los cortes con el eje X',
        text: 'Igualamos la curva con y = 0 y factorizamos. Así obtenemos los límites de integración x = 0 y x = 4.',
        math: '4x − x² = 0  →  x(4 − x) = 0  →  x = 0, x = 4',
      },
      {
        title: 'Identifica el radio y la altura',
        text: 'Como la región gira alrededor del eje Y, el radio de cada cascarón es x. La altura es la función de arriba menos la de abajo.',
        math: 'r(x) = x   ·   h(x) = (4x − x²) − 0',
      },
      {
        title: 'Plantea la integral',
        text: 'Aplicamos la fórmula de cascarones cilíndricos en dx con los límites que encontramos.',
        math: 'V = 2π ∫₀⁴ x[(4x − x²) − 0] dx',
      },
      {
        title: 'Distribuye e integra cada término',
        text: 'Distribuimos la x para obtener 4x² − x³ y calculamos la antiderivada de cada término.',
        math: 'V = 2π ∫₀⁴ (4x² − x³) dx = 2π [4x³/3 − x⁴/4]₀⁴',
      },
      {
        title: 'Evalúa los límites',
        text: 'Evaluamos en 4, restamos lo evaluado en 0 y simplificamos antes de multiplicar por 2π.',
        math: 'V = 2π(256/3 − 64) = 2π(64/3) = 128π/3 u³ ≈ 134.0413 u³',
      },
    ],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MathExpression({ expression, compactFraction = false }: { expression: string; compactFraction?: boolean }) {
  if (expression === 'V = π ∫ₐᵇ [R(x)]² dx') {
    return (
      <img
        className="key-formula-image"
        src={diskKeyFormulaImage}
        alt="V igual a pi por la integral de a hasta b del radio de x al cuadrado, diferencial de x"
      />
    )
  }

  if (expression === 'π ∫₀² [√(x − 1)]² dx') {
    return (
      <img
        className="step-formula-image"
        src={integralFormulaImage}
        alt="Pi por la integral de cero a dos de la raíz de x menos uno, elevada al cuadrado, diferencial de x"
      />
    )
  }

  if (expression === 'V = π ∫₀² (x + 1) dx') {
    return (
      <img
        className="step-formula-image step-formula-image-small"
        src={secondIntegralFormulaImage}
        alt="V igual a pi por la integral de cero a dos de x menos uno, diferencial de x"
      />
    )
  }

  if (expression === 'V = π [x²/2 + x]₀²') {
    return (
      <img
        className="step-formula-image step-formula-image-small"
        src={thirdIntegralFormulaImage}
        alt="V igual a pi por x al cuadrado sobre dos más x, evaluado de cero a dos"
      />
    )
  }

  if (expression === 'V = π[(2²/2 + 2) − (0²/2 + 0)] = 4π u³ ≈ 12.5664 u³') {
    return (
      <img
        className="step-formula-image step-formula-image-wide"
        src={fourthIntegralFormulaImage}
        alt="Evaluación de la integral en dos y cero, con resultado cuatro pi unidades cúbicas, aproximadamente doce punto cinco seis seis cuatro"
      />
    )
  }

  return (
    <>
      {expression.split(/([A-Za-z0-9π²³⁴⁵⁶⁷⁸⁹⁰]+\/[A-Za-z0-9π²³⁴⁵⁶⁷⁸⁹⁰]+)/g).map((part, index) => {
        const fraction = part.match(/^(.+)\/(.+)$/)

        return fraction ? (
          <span className={`math-fraction ${compactFraction ? 'math-fraction-compact' : ''}`} key={`${part}-${index}`}>
            <span>{fraction[1]}</span>
            <span>{fraction[2]}</span>
          </span>
        ) : (
          part
        )
      })}
    </>
  )
}

function AnswerExpression({ expression }: { expression: string }) {
  const [exact, approximation] = expression.split('≈')
  const isWasherAnswer = approximation?.includes('129.8525')

  return (
    <span className="answer-expression">
      <span className={isWasherAnswer ? 'washer-answer-exact' : undefined}>
        <MathExpression expression={exact.trim()} compactFraction />
      </span>
      {approximation && (
        <span className={`answer-approximation ${isWasherAnswer ? 'washer-answer-approximation' : ''}`}>
          ≈ <MathExpression expression={approximation.trim()} />
        </span>
      )}
    </span>
  )
}

function CubeIcon({ type }: { type: string }) {
  if (type === 'cilindro') {
    return (
      <svg viewBox="0 0 120 110" fill="none" aria-hidden="true">
        <ellipse cx="60" cy="25" rx="32" ry="13" fill="white" fillOpacity=".65" stroke="currentColor" strokeWidth="2" />
        <path d="M28 25v58c0 7 14 13 32 13s32-6 32-13V25" fill="white" fillOpacity=".22" stroke="currentColor" strokeWidth="2" />
        <path d="M28 83c0 7 14 13 32 13s32-6 32-13" stroke="currentColor" strokeWidth="2" />
        <path d="M60 25v-9M56 20l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'piramide') {
    return (
      <svg viewBox="0 0 120 110" fill="none" aria-hidden="true">
        <path d="M60 12 18 83l46 16 38-23L60 12Z" fill="white" fillOpacity=".25" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m18 83 45-11 39 4M63 72l1 27M60 12l3 60" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m55 66 8 6 8-5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 110" fill="none" aria-hidden="true">
      <path d="m23 34 48-17 29 17-48 18-29-18Z" fill="white" fillOpacity=".6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m23 34 29 18v44L23 77V34ZM52 52l48-18v43L52 96V52Z" fill="white" fillOpacity=".22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m23 77 29 19 48-19" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function Header({ onHome, detail }: { onHome: () => void; detail: boolean }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={onHome} aria-label="Ir al inicio">
        <span className="brand-mark">
          <span />
          <span />
          <span />
        </span>
        <span>
          forma<span>³</span>
        </span>
      </button>
      <div className="header-side">
        {detail && (
          <button className="back-link" onClick={onHome}>
            <span>←</span> Todos los ejercicios
          </button>
        )}
        <span className="level-pill">Cálculo · Nivel universitario</span>
      </div>
    </header>
  )
}

function GeoGebraEmbed({ src, title }: { src: string; title: string }) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px 160px 0px' },
    )

    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="geogebra-frame" ref={frameRef}>
      {shouldLoad ? (
        <iframe src={src} title={title} allowFullScreen tabIndex={-1} />
      ) : (
        <div className="geogebra-placeholder">
          <span className="placeholder-orbit" />
          <strong>Modelo 3D interactivo</strong>
          <small>Se cargará cuando llegues a esta sección</small>
        </div>
      )}
      <div className="interactive-tag"><span /> INTERACTIVO · GEOGEBRA</div>
    </div>
  )
}

function evaluateExpression(expression: string, x: number) {
  const compact = expression.replace(/\s+/g, '')
  const tokens = compact.match(/sqrt|sin|cos|abs|pi|√|π|e|x|\d*\.?\d+|[()+\-*/^]/g) ?? []

  if (!compact || tokens.join('') !== compact) {
    throw new Error('Usa números, x, paréntesis y los operadores +, −, *, / o ^.')
  }

  let position = 0
  const peek = () => tokens[position]
  const consume = (token?: string) => {
    const current = tokens[position]
    if (token && current !== token) throw new Error(`Se esperaba “${token}”.`)
    position += 1
    return current
  }

  const parsePrimary = (): number => {
    const token = peek()

    if (token === '(') {
      consume('(')
      const value = parseExpression()
      consume(')')
      return value
    }

    if (token === 'x') {
      consume()
      return x
    }

    if (token === 'pi' || token === 'π' || token === 'e') {
      consume()
      return token === 'pi' || token === 'π' ? Math.PI : Math.E
    }

    if (token === 'sqrt' || token === '√' || token === 'sin' || token === 'cos' || token === 'abs') {
      const operation = consume()
      consume('(')
      const value = parseExpression()
      consume(')')
      if (operation === 'sqrt' || operation === '√') return Math.sqrt(value)
      if (operation === 'sin') return Math.sin(value)
      if (operation === 'cos') return Math.cos(value)
      return Math.abs(value)
    }

    const value = Number(consume())
    if (!Number.isFinite(value)) throw new Error('La función contiene un valor no válido.')
    return value
  }

  const parsePower = (): number => {
    let value = parsePrimary()
    if (peek() === '^') {
      consume('^')
      value = value ** parseUnary()
    }
    return value
  }

  const parseUnary = (): number => {
    if (peek() === '+') {
      consume('+')
      return parseUnary()
    }
    if (peek() === '-') {
      consume('-')
      return -parseUnary()
    }
    return parsePower()
  }

  const parseTerm = (): number => {
    let value = parseUnary()
    while (peek() === '*' || peek() === '/') {
      const operation = consume()
      const right = parseUnary()
      value = operation === '*' ? value * right : value / right
    }
    return value
  }

  const parseExpression = (): number => {
    let value = parseTerm()
    while (peek() === '+' || peek() === '-') {
      const operation = consume()
      const right = parseTerm()
      value = operation === '+' ? value + right : value - right
    }
    return value
  }

  const result = parseExpression()
  if (position !== tokens.length) throw new Error('Revisa los paréntesis y operadores de la función.')
  if (!Number.isFinite(result)) throw new Error('La función no produce valores reales en todo el intervalo.')
  return result
}

function MathKeyboard({
  label,
  onInsert,
  onDelete,
  onClear,
}: {
  label: string
  onInsert: (token: string, cursorOffset?: number) => void
  onDelete: () => void
  onClear: () => void
}) {
  return (
    <div className="math-keyboard" aria-label={label}>
      <button type="button" onClick={() => onInsert('x')}>x</button>
      <button type="button" onClick={() => onInsert(' + ')}>+</button>
      <button type="button" onClick={() => onInsert(' - ')}>−</button>
      <button type="button" onClick={() => onInsert(' * ')}>×</button>
      <button type="button" onClick={() => onInsert(' / ')}>÷</button>
      <button type="button" onClick={() => onInsert('^2')}>x²</button>
      <button type="button" onClick={() => onInsert('√()', -1)}>√</button>
      <button type="button" onClick={() => onInsert('(')}>(</button>
      <button type="button" onClick={() => onInsert(')')}>)</button>
      <button type="button" onClick={() => onInsert('π')}>π</button>
      <button type="button" onClick={() => onInsert('.')}>.</button>
      <button type="button" className="keyboard-action" onClick={onDelete}>Borrar</button>
      <button type="button" className="keyboard-action keyboard-clear" onClick={onClear}>Limpiar</button>
    </div>
  )
}

function DiskCalculator() {
  const [radius, setRadius] = useState('√(x + 1)')
  const [lowerLimit, setLowerLimit] = useState('0')
  const [upperLimit, setUpperLimit] = useState('2')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState('')
  const radiusInputRef = useRef<HTMLInputElement>(null)

  const insertRadiusToken = (token: string, cursorOffset = 0) => {
    const input = radiusInputRef.current
    const start = input?.selectionStart ?? radius.length
    const end = input?.selectionEnd ?? radius.length
    const nextValue = `${radius.slice(0, start)}${token}${radius.slice(end)}`
    const nextCursor = start + token.length + cursorOffset
    setRadius(nextValue)

    window.setTimeout(() => {
      radiusInputRef.current?.focus()
      radiusInputRef.current?.setSelectionRange(nextCursor, nextCursor)
    }, 0)
  }

  const deleteRadiusToken = () => {
    const input = radiusInputRef.current
    const start = input?.selectionStart ?? radius.length
    const end = input?.selectionEnd ?? radius.length
    const deleteFrom = start === end ? Math.max(0, start - 1) : start
    setRadius(`${radius.slice(0, deleteFrom)}${radius.slice(end)}`)

    window.setTimeout(() => {
      radiusInputRef.current?.focus()
      radiusInputRef.current?.setSelectionRange(deleteFrom, deleteFrom)
    }, 0)
  }

  const calculate = (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    try {
      const a = Number(lowerLimit)
      const b = Number(upperLimit)
      if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) {
        throw new Error('El límite superior debe ser mayor que el límite inferior.')
      }

      const intervals = 1000
      const step = (b - a) / intervals
      const integrand = (value: number) => {
        const evaluatedRadius = evaluateExpression(radius, value)
        return evaluatedRadius ** 2
      }

      let sum = integrand(a) + integrand(b)
      for (let index = 1; index < intervals; index += 1) {
        sum += (index % 2 === 0 ? 2 : 4) * integrand(a + index * step)
      }

      const volume = Math.PI * (step / 3) * sum
      if (!Number.isFinite(volume)) throw new Error('No fue posible calcular el volumen en este intervalo.')
      setResult(volume)
    } catch (calculationError) {
      setResult(null)
      setError(calculationError instanceof Error ? calculationError.message : 'No fue posible resolver la función.')
    }
  }

  return (
    <article id="calculadora" className="lesson-block calculator-block">
      <span className="block-label">05 · CALCULADORA</span>
      <h2>Resuelve tu propio disco.</h2>
      <p className="block-intro">Escribe el radio R(x) y los límites. La calculadora aproximará el volumen con integración numérica.</p>

      <div className="disk-calculator">
        <div className="calculator-heading">
          <div>
            <span>VOLUMEN POR DISCOS</span>
            <strong>
              <img
                className="calculator-formula-image"
                src={diskCalculatorFormulaImage}
                alt="V igual a pi por la integral de a hasta b del radio de x al cuadrado, diferencial de x"
              />
            </strong>
          </div>
          <span className="calculator-status"><i /> LISTA PARA CALCULAR</span>
        </div>

        <form onSubmit={calculate} className="calculator-form">
          <label className="radius-field">
            <span>RADIO DE LA FUNCIÓN</span>
            <div className="expression-input">
              <b>R(x) =</b>
              <input
                ref={radiusInputRef}
                value={radius}
                onChange={(event) => setRadius(event.target.value)}
                placeholder="√(x + 1)"
                spellCheck={false}
                aria-label="Función del radio"
              />
            </div>
            <MathKeyboard
              label="Teclado matemático para el radio"
              onInsert={insertRadiusToken}
              onDelete={deleteRadiusToken}
              onClear={() => setRadius('')}
            />
            <small>Usa * para multiplicar y ^ para potencias. Ejemplo: √(x + 1)</small>
          </label>

          <div className="limit-fields">
            <label>
              <span>LÍMITE INFERIOR · a</span>
              <input type="number" step="any" value={lowerLimit} onChange={(event) => setLowerLimit(event.target.value)} />
            </label>
            <label>
              <span>LÍMITE SUPERIOR · b</span>
              <input type="number" step="any" value={upperLimit} onChange={(event) => setUpperLimit(event.target.value)} />
            </label>
          </div>

          <button type="submit" className="calculate-button">
            Calcular volumen
            <ArrowIcon />
          </button>
        </form>

        {error && <div className="calculator-error" role="alert">{error}</div>}

        {result !== null && (
          <div className="calculator-result" aria-live="polite">
            <div>
              <span>FUNCIÓN EVALUADA</span>
              <strong>R(x) = {radius}</strong>
            </div>
            <div>
              <span>INTERVALO</span>
              <strong>[{lowerLimit}, {upperLimit}]</strong>
            </div>
            <div className="calculated-volume">
              <span>VOLUMEN APROXIMADO</span>
              <strong>V ≈ {result.toFixed(6)} u³</strong>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function WasherCalculator() {
  const [outerRadius, setOuterRadius] = useState('√(x) + 2')
  const [innerRadius, setInnerRadius] = useState('1')
  const [lowerLimit, setLowerLimit] = useState('0')
  const [upperLimit, setUpperLimit] = useState('4')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState('')
  const outerInputRef = useRef<HTMLInputElement>(null)
  const innerInputRef = useRef<HTMLInputElement>(null)

  const insertToken = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLInputElement | null>,
    token: string,
    cursorOffset = 0,
  ) => {
    const start = inputRef.current?.selectionStart ?? value.length
    const end = inputRef.current?.selectionEnd ?? value.length
    const nextValue = `${value.slice(0, start)}${token}${value.slice(end)}`
    const nextCursor = start + token.length + cursorOffset
    setValue(nextValue)

    window.setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(nextCursor, nextCursor)
    }, 0)
  }

  const deleteToken = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLInputElement | null>,
  ) => {
    const start = inputRef.current?.selectionStart ?? value.length
    const end = inputRef.current?.selectionEnd ?? value.length
    const deleteFrom = start === end ? Math.max(0, start - 1) : start
    setValue(`${value.slice(0, deleteFrom)}${value.slice(end)}`)

    window.setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(deleteFrom, deleteFrom)
    }, 0)
  }

  const calculate = (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    try {
      const a = Number(lowerLimit)
      const b = Number(upperLimit)
      if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) {
        throw new Error('El límite superior debe ser mayor que el límite inferior.')
      }

      const intervals = 1000
      const step = (b - a) / intervals
      const integrand = (value: number) => {
        const outer = evaluateExpression(outerRadius, value)
        const inner = evaluateExpression(innerRadius, value)
        if (outer < 0 || inner < 0) {
          throw new Error('Los radios deben ser positivos en todo el intervalo.')
        }
        if (outer < inner) {
          throw new Error('El radio exterior R(x) debe ser mayor o igual que el radio interior r(x).')
        }
        return outer ** 2 - inner ** 2
      }

      let sum = integrand(a) + integrand(b)
      for (let index = 1; index < intervals; index += 1) {
        sum += (index % 2 === 0 ? 2 : 4) * integrand(a + index * step)
      }

      const volume = Math.PI * (step / 3) * sum
      if (!Number.isFinite(volume)) throw new Error('No fue posible calcular el volumen en este intervalo.')
      setResult(volume)
    } catch (calculationError) {
      setResult(null)
      setError(calculationError instanceof Error ? calculationError.message : 'No fue posible resolver las funciones.')
    }
  }

  return (
    <article id="calculadora" className="lesson-block calculator-block">
      <span className="block-label">05 · CALCULADORA</span>
      <h2>Resuelve tus propias arandelas.</h2>
      <p className="block-intro">Escribe los radios exterior e interior y define el intervalo de integración.</p>

      <div className="disk-calculator washer-calculator">
        <div className="calculator-heading">
          <div>
            <span>VOLUMEN POR ARANDELAS</span>
            <strong>V = π ∫ₐᵇ [R(x)² − r(x)²] dx</strong>
          </div>
          <span className="calculator-status"><i /> LISTA PARA CALCULAR</span>
        </div>

        <form onSubmit={calculate} className="calculator-form">
          <label className="radius-field">
            <span>RADIO EXTERIOR</span>
            <div className="expression-input">
              <b>R(x) =</b>
              <input
                ref={outerInputRef}
                value={outerRadius}
                onChange={(event) => setOuterRadius(event.target.value)}
                placeholder="√(x) + 2"
                spellCheck={false}
                aria-label="Función del radio exterior"
              />
            </div>
            <MathKeyboard
              label="Teclado matemático para el radio exterior"
              onInsert={(token, offset) => insertToken(outerRadius, setOuterRadius, outerInputRef, token, offset)}
              onDelete={() => deleteToken(outerRadius, setOuterRadius, outerInputRef)}
              onClear={() => setOuterRadius('')}
            />
          </label>

          <label className="radius-field">
            <span>RADIO INTERIOR</span>
            <div className="expression-input">
              <b>r(x) =</b>
              <input
                ref={innerInputRef}
                value={innerRadius}
                onChange={(event) => setInnerRadius(event.target.value)}
                placeholder="1"
                spellCheck={false}
                aria-label="Función del radio interior"
              />
            </div>
            <MathKeyboard
              label="Teclado matemático para el radio interior"
              onInsert={(token, offset) => insertToken(innerRadius, setInnerRadius, innerInputRef, token, offset)}
              onDelete={() => deleteToken(innerRadius, setInnerRadius, innerInputRef)}
              onClear={() => setInnerRadius('')}
            />
          </label>

          <div className="limit-fields">
            <label>
              <span>LÍMITE INFERIOR · a</span>
              <input type="number" step="any" value={lowerLimit} onChange={(event) => setLowerLimit(event.target.value)} />
            </label>
            <label>
              <span>LÍMITE SUPERIOR · b</span>
              <input type="number" step="any" value={upperLimit} onChange={(event) => setUpperLimit(event.target.value)} />
            </label>
          </div>

          <button type="submit" className="calculate-button">
            Calcular volumen
            <ArrowIcon />
          </button>
        </form>

        {error && <div className="calculator-error" role="alert">{error}</div>}

        {result !== null && (
          <div className="calculator-result washer-result" aria-live="polite">
            <div>
              <span>RADIO EXTERIOR</span>
              <strong>R(x) = {outerRadius}</strong>
            </div>
            <div>
              <span>RADIO INTERIOR</span>
              <strong>r(x) = {innerRadius}</strong>
            </div>
            <div>
              <span>INTERVALO</span>
              <strong>[{lowerLimit}, {upperLimit}]</strong>
            </div>
            <div className="calculated-volume">
              <span>VOLUMEN APROXIMADO</span>
              <strong>V ≈ {result.toFixed(6)} u³</strong>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function ShellCalculator() {
  const [radius, setRadius] = useState('x')
  const [height, setHeight] = useState('4*x - x^2')
  const [lowerLimit, setLowerLimit] = useState('0')
  const [upperLimit, setUpperLimit] = useState('4')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState('')
  const radiusInputRef = useRef<HTMLInputElement>(null)
  const heightInputRef = useRef<HTMLInputElement>(null)

  const insertToken = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLInputElement | null>,
    token: string,
    cursorOffset = 0,
  ) => {
    const start = inputRef.current?.selectionStart ?? value.length
    const end = inputRef.current?.selectionEnd ?? value.length
    const nextValue = `${value.slice(0, start)}${token}${value.slice(end)}`
    const nextCursor = start + token.length + cursorOffset
    setValue(nextValue)

    window.setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(nextCursor, nextCursor)
    }, 0)
  }

  const deleteToken = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLInputElement | null>,
  ) => {
    const start = inputRef.current?.selectionStart ?? value.length
    const end = inputRef.current?.selectionEnd ?? value.length
    const deleteFrom = start === end ? Math.max(0, start - 1) : start
    setValue(`${value.slice(0, deleteFrom)}${value.slice(end)}`)

    window.setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(deleteFrom, deleteFrom)
    }, 0)
  }

  const calculate = (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    try {
      const a = Number(lowerLimit)
      const b = Number(upperLimit)
      if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) {
        throw new Error('El límite superior debe ser mayor que el límite inferior.')
      }

      const intervals = 1000
      const step = (b - a) / intervals
      const integrand = (value: number) => {
        const evaluatedRadius = evaluateExpression(radius, value)
        const evaluatedHeight = evaluateExpression(height, value)
        if (evaluatedRadius < 0 || evaluatedHeight < 0) {
          throw new Error('El radio y la altura deben ser positivos en todo el intervalo.')
        }
        return evaluatedRadius * evaluatedHeight
      }

      let sum = integrand(a) + integrand(b)
      for (let index = 1; index < intervals; index += 1) {
        sum += (index % 2 === 0 ? 2 : 4) * integrand(a + index * step)
      }

      const volume = 2 * Math.PI * (step / 3) * sum
      if (!Number.isFinite(volume)) throw new Error('No fue posible calcular el volumen en este intervalo.')
      setResult(volume)
    } catch (calculationError) {
      setResult(null)
      setError(calculationError instanceof Error ? calculationError.message : 'No fue posible resolver las funciones.')
    }
  }

  return (
    <article id="calculadora" className="lesson-block calculator-block">
      <span className="block-label">05 · CALCULADORA</span>
      <h2>Resuelve tus propios cascarones.</h2>
      <p className="block-intro">Escribe el radio y la altura de cada cascarón y define el intervalo de integración.</p>

      <div className="disk-calculator shell-calculator">
        <div className="calculator-heading">
          <div>
            <span>VOLUMEN POR CASCARONES CILÍNDRICOS</span>
            <strong>V = 2π ∫ₐᵇ r(x) · h(x) dx</strong>
          </div>
          <span className="calculator-status"><i /> LISTA PARA CALCULAR</span>
        </div>

        <form onSubmit={calculate} className="calculator-form">
          <label className="radius-field">
            <span>RADIO DEL CASCARÓN</span>
            <div className="expression-input">
              <b>r(x) =</b>
              <input
                ref={radiusInputRef}
                value={radius}
                onChange={(event) => setRadius(event.target.value)}
                placeholder="x"
                spellCheck={false}
                aria-label="Función del radio del cascarón"
              />
            </div>
            <MathKeyboard
              label="Teclado matemático para el radio del cascarón"
              onInsert={(token, offset) => insertToken(radius, setRadius, radiusInputRef, token, offset)}
              onDelete={() => deleteToken(radius, setRadius, radiusInputRef)}
              onClear={() => setRadius('')}
            />
          </label>

          <label className="radius-field">
            <span>ALTURA DEL CASCARÓN</span>
            <div className="expression-input">
              <b>h(x) =</b>
              <input
                ref={heightInputRef}
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                placeholder="4*x - x^2"
                spellCheck={false}
                aria-label="Función de la altura del cascarón"
              />
            </div>
            <MathKeyboard
              label="Teclado matemático para la altura del cascarón"
              onInsert={(token, offset) => insertToken(height, setHeight, heightInputRef, token, offset)}
              onDelete={() => deleteToken(height, setHeight, heightInputRef)}
              onClear={() => setHeight('')}
            />
            <small>Usa * para multiplicar y ^ para potencias. Ejemplo: 4*x - x^2</small>
          </label>

          <div className="limit-fields">
            <label>
              <span>LÍMITE INFERIOR · a</span>
              <input type="number" step="any" value={lowerLimit} onChange={(event) => setLowerLimit(event.target.value)} />
            </label>
            <label>
              <span>LÍMITE SUPERIOR · b</span>
              <input type="number" step="any" value={upperLimit} onChange={(event) => setUpperLimit(event.target.value)} />
            </label>
          </div>

          <button type="submit" className="calculate-button">
            Calcular volumen
            <ArrowIcon />
          </button>
        </form>

        {error && <div className="calculator-error" role="alert">{error}</div>}

        {result !== null && (
          <div className="calculator-result shell-result" aria-live="polite">
            <div>
              <span>RADIO</span>
              <strong>r(x) = {radius}</strong>
            </div>
            <div>
              <span>ALTURA</span>
              <strong>h(x) = {height}</strong>
            </div>
            <div>
              <span>INTERVALO</span>
              <strong>[{lowerLimit}, {upperLimit}]</strong>
            </div>
            <div className="calculated-volume">
              <span>VOLUMEN APROXIMADO</span>
              <strong>V ≈ {result.toFixed(6)} u³</strong>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function Home({ onSelect }: { onSelect: (exercise: Exercise) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="calculus-background" aria-hidden="true">
          <svg viewBox="0 0 1440 650" preserveAspectRatio="none">
            <path className="calc-axis" d="M75 510H1370M190 75V590" />
            <path className="calc-curve calc-curve-one" d="M76 505C230 500 273 446 350 367C445 269 514 208 622 237C742 269 794 431 912 421C1043 410 1105 222 1368 174" />
            <path className="calc-curve calc-curve-two" d="M76 550C257 545 318 524 417 480C554 420 664 318 783 331C909 344 973 507 1109 503C1194 501 1276 439 1368 361" />
            <path className="calc-area" d="M190 505C282 490 296 423 350 367C445 269 514 208 622 237C742 269 794 431 912 421L912 505Z" />
          </svg>
          <span className="formula formula-one">∫<sub>a</sub><sup>b</sup> f(x) dx</span>
          <span className="formula formula-two">lim<sub>h→0</sub></span>
          <span className="formula formula-three">dV = πR² dx</span>
          <span className="formula formula-four">Σ</span>
        </div>
        <div className="eyebrow"><span /> Aprende explorando</div>
        <h1>El cálculo integral se<br />entiende <span className="fg-inline-italic">mejor</span> en 3D.</h1>
        <p>Elige un ejercicio. Te guiaremos por medio de ejemplos dependiendo del método que quieras usar.</p>
        <div className="scroll-hint">
          <span>Explora los ejercicios</span>
          <i>↓</i>
        </div>
      </section>

      <section className="exercise-section" id="ejercicios">
        <div className="section-heading">
          <div>
            <span className="kicker">01 — ELIGE UN TEMA</span>
            <h2>Tres formas. Tres retos.</h2>
          </div>
          <p>No necesitas memorizar. Solo observar, entender y practicar.</p>
        </div>
        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <button
              key={exercise.id}
              className="exercise-card"
              style={{ '--accent': exercise.accent, '--soft': exercise.soft, '--line': exercise.border } as React.CSSProperties}
              onClick={() => onSelect(exercise)}
            >
              <span className="card-number">{exercise.number}</span>
              <div className="shape-wrap">
                {exercise.id === 'prisma' ? (
                  <img className="disk-method-image" src={diskMethodImage} alt="Representación del método de discos" />
                ) : exercise.id === 'piramide' ? (
                  <img className="washer-method-image" src={basicWasherImage} alt="Representación del método de arandelas" />
                ) : (
                  <img
                    className="shell-method-image"
                    src={shellMethodImage}
                    alt="Representación del método de cascarones cilíndricos"
                  />
                )}
              </div>
              <div className="card-copy">
                <h3>{exercise.id === 'prisma' ? 'Método de Discos' : exercise.id === 'piramide' ? 'Método de arandelas' : 'Método de cascarones cilíndricos'}</h3>
                <p>{exercise.id === 'prisma' ? 'Aprende a usar el método de discos por medio de este ejemplo.' : exercise.id === 'piramide' ? 'Aprende a usar el método de arandelas por medio de este ejemplo.' : 'Aprende a usar el método de cascarones cilíndricos por medio de este ejemplo.'}</p>
                <div className="card-action">Comenzar ejercicio <ArrowIcon /></div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

function Detail({ exercise, onHome }: { exercise: Exercise; onHome: () => void }) {
  const [openStep, setOpenStep] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useLayoutEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [exercise.id])

  return (
    <main className="detail">
      <section className="detail-hero" style={{ '--accent': exercise.accent, '--soft': exercise.soft } as React.CSSProperties}>
        <div className="detail-intro">
          <span className="detail-number">EJERCICIO {exercise.number}</span>
          <h1>{exercise.id === 'prisma' ? 'Método de discos' : exercise.id === 'piramide' ? 'Método de arandelas' : 'Método de cascarones cilíndricos'}</h1>
          {exercise.id === 'cilindro' && <p>{exercise.subtitle}</p>}
        </div>
        <div className="detail-shape" style={exercise.id === 'piramide' ? { padding: 0 } : undefined}>
          {exercise.id === 'prisma' ? (
            <img className="detail-method-image detail-disk-image" src={diskMethodImage} alt="Representación del método de discos" />
          ) : exercise.id === 'piramide' ? (
            <img className="detail-method-image detail-washer-image" src={basicWasherImage} alt="Representación del método de arandelas" />
          ) : (
            <img
              className="detail-method-image detail-shell-image"
              src={new URL('./assets/metodo-cascarones-detalle-transparente.png', import.meta.url).href}
              alt="Representación del método de cascarones cilíndricos"
              style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
            />
          )}
        </div>
      </section>

      <section className="lesson">
        <aside className="lesson-nav">
          <span>EN ESTA LECCIÓN</span>
          <a href="#problema"><i>1</i> El problema</a>
          <a href="#pasos"><i>2</i> Paso a paso</a>
          <a href="#explora"><i>3</i> Explora en 3D</a>
          <a href="#video"><i>4</i> Video explicación</a>
          <a href="#calculadora"><i>5</i> Calculadora</a>
        </aside>

        <div className="lesson-content">
          <article id="problema" className="lesson-block">
            <span className="block-label">01 · EL PROBLEMA</span>
            <h2>Primero, entendamos el reto.</h2>
            <div className="problem-card" style={{ borderColor: exercise.border, background: exercise.soft }}>
              <span className="quote">“</span>
              <p>{exercise.problem}</p>
            </div>
            <div className="formula-row">
              <div>
                <span>FÓRMULA CLAVE</span>
                <strong>
                  {exercise.id === 'piramide' ? (
                    <img
                      src={new URL('./assets/formula-clave-arandelas.png', import.meta.url).href}
                      alt="V = π integral de a a b de R(x) al cuadrado menos r(x) al cuadrado, diferencial de x"
                      style={{
                        display: 'block',
                        width: 'min(100%, 245px)',
                        height: 'auto',
                        marginTop: '8px',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                      }}
                    />
                  ) : exercise.id === 'cilindro' ? (
                    <img
                      src={new URL('./assets/formula-clave-cascarones.png', import.meta.url).href}
                      alt="V es igual a 2 pi por la integral de b a a de x por f(x) menos g(x), diferencial de x"
                      style={{
                        display: 'block',
                        width: 'min(100%, 230px)',
                        height: 'auto',
                        marginTop: '8px',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                      }}
                    />
                  ) : (
                    <MathExpression expression={exercise.formula} />
                  )}
                </strong>
              </div>
              <div className="answer">
                <button
                  className="answer-reveal-button"
                  onClick={() => setShowAnswer((visible) => !visible)}
                  aria-expanded={showAnswer}
                  aria-controls="exercise-answer"
                >
                  {showAnswer ? 'Ocultar respuesta' : 'Ver respuesta'}
                  <span aria-hidden="true">{showAnswer ? '−' : '+'}</span>
                </button>
                {showAnswer && (
                  <div className="answer-result" id="exercise-answer">
                    <span>RESPUESTA</span>
                    <strong
                      className={exercise.id === 'prisma' ? 'answer-value-disk' : exercise.id === 'cilindro' ? 'answer-value-shell' : undefined}
                      style={{ color: exercise.accent }}
                    >
                      <AnswerExpression expression={exercise.result} />
                    </strong>
                  </div>
                )}
              </div>
            </div>
          </article>

          <article id="pasos" className="lesson-block">
            <span className="block-label">02 · PASO A PASO</span>
            <h2>Resolvamos juntos.</h2>
            <div className="steps">
              {exercise.steps.map((step, index) => (
                <button
                  className={`step ${openStep === index ? 'open' : ''}`}
                  key={step.title}
                  onClick={() => setOpenStep(index)}
                  aria-expanded={openStep === index}
                >
                  <span className="step-index" style={openStep === index ? { background: exercise.accent } : {}}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="step-copy">
                    <strong>{step.title}</strong>
                    <span className="step-body">
                      <span>{step.text}</span>
                      <b style={{ color: exercise.accent }}>
                        {step.math === '4x − x² = 0  →  x(4 − x) = 0  →  x = 0, x = 4' ? (
                          <img
                            src={new URL('./assets/formula-cascarones-paso-1.png', import.meta.url).href}
                            alt="4x menos x al cuadrado es igual a 0, por lo tanto x por 4 menos x es igual a 0, y x es igual a 0 o 4"
                            style={{
                              display: 'block',
                              width: 'min(100%, 300px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'r(x) = x   ·   h(x) = (4x − x²) − 0' ? (
                          <img
                            src={new URL('./assets/formula-cascarones-paso-2.png', import.meta.url).href}
                            alt="El radio de x es igual a x, y la altura de x es igual a 4x menos x al cuadrado, menos 0"
                            style={{
                              display: 'block',
                              width: 'min(100%, 275px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'V = 2π ∫₀⁴ x[(4x − x²) − 0] dx' ? (
                          <img
                            src={new URL('./assets/formula-cascarones-paso-3.png', import.meta.url).href}
                            alt="V es igual a 2 pi por la integral de 0 a 4 de x por 4x menos x al cuadrado, menos 0, diferencial de x"
                            style={{
                              display: 'block',
                              width: 'min(100%, 225px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'V = 2π ∫₀⁴ (4x² − x³) dx = 2π [4x³/3 − x⁴/4]₀⁴' ? (
                          <img
                            src={new URL('./assets/formula-cascarones-paso-4.png', import.meta.url).href}
                            alt="V es igual a 2 pi por la integral de 0 a 4 de 4x al cuadrado menos x al cubo, diferencial de x, igual a 2 pi por 4x al cubo sobre 3 menos x a la cuarta sobre 4, evaluado de 0 a 4"
                            style={{
                              display: 'block',
                              width: 'min(100%, 300px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : exercise.id === 'cilindro' && index === 4 ? (
                          <img
                            src={new URL('./assets/formula-cascarones-paso-5.png', import.meta.url).href}
                            alt={step.math}
                            style={{
                              display: 'block',
                              width: 'min(100%, 350px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'V = π ∫₀⁴ [(√x + 2)² − (1)²] dx' ? (
                          <img
                            src={new URL('./assets/formula-arandelas-paso-1.png', import.meta.url).href}
                            alt="V = π integral de 0 a 4 de la raíz de x más 2 al cuadrado menos 1 al cuadrado, diferencial de x"
                            style={{
                              display: 'block',
                              width: 'min(100%, 240px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === '(√x + 2)² − 1 = x + 4√x + 4 − 1 = x + 4x^(1/2) + 3' ? (
                          <img
                            src={new URL('./assets/formula-arandelas-paso-2.png', import.meta.url).href}
                            alt="La raíz de x más 2 al cuadrado menos 1 es igual a x más 4 raíz de x más 4 menos 1, igual a x más 4x elevado a un medio más 3"
                            style={{
                              display: 'block',
                              width: 'min(100%, 330px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'V = π [x²/2 + 8/3 · x^(3/2) + 3x]₀⁴' ? (
                          <img
                            src={new URL('./assets/formula-arandelas-paso-3.png', import.meta.url).href}
                            alt="V = π por x al cuadrado sobre 2 más 8 tercios por x elevado a tres medios más 3x, evaluado de 0 a 4"
                            style={{
                              display: 'block',
                              width: 'min(100%, 210px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : step.math === 'V = π [4²/2 + 8/3 · (4)^(3/2) + 3(4)] = 124π/3 u³ ≈ 129.8525 u³' ? (
                          <img
                            src={new URL('./assets/formula-arandelas-paso-4.png', import.meta.url).href}
                            alt="V = π por 4 al cuadrado sobre 2 más 8 tercios por 4 elevado a tres medios más 3 por 4, igual a 124π sobre 3 unidades cúbicas, aproximadamente 129.8525 unidades cúbicas"
                            style={{
                              display: 'block',
                              width: 'min(100%, 330px)',
                              height: 'auto',
                              marginTop: '8px',
                              objectFit: 'contain',
                              mixBlendMode: 'multiply',
                            }}
                          />
                        ) : (
                          <MathExpression expression={step.math} />
                        )}
                      </b>
                    </span>
                  </span>
                  <span className="step-toggle">{openStep === index ? '−' : '+'}</span>
                </button>
              ))}
            </div>
          </article>

          <article id="explora" className="lesson-block">
            <span className="block-label">03 · EXPLORA EN 3D</span>
            <h2>Ahora, míralo desde todos los ángulos.</h2>
            <p className="block-intro">Arrastra para girar la figura. Usa la rueda o pellizca para acercarte.</p>
            <GeoGebraEmbed src={exercise.geogebra} title={`Modelo 3D interactivo de ${exercise.title}`} />
          </article>

          <article id="video" className="lesson-block">
            <span className="block-label">04 · VIDEO EXPLICACIÓN</span>
            <h2>Repásalo a tu ritmo.</h2>
            <p className="block-intro">Pausa, retrocede y toma notas. Aprender también es darse tiempo.</p>
            <div className="video-frame">
              <iframe
                src={exercise.video}
                title={`Video explicativo: ${exercise.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </article>

          {exercise.id === 'prisma' && <DiskCalculator />}
          {exercise.id === 'piramide' && <WasherCalculator />}
          {exercise.id === 'cilindro' && <ShellCalculator />}

          <div className="finish-card">
            <span>LECCIÓN COMPLETADA</span>
            <h2>Ya conoces mejor {exercise.id === 'prisma' ? 'el método de discos' : exercise.title.toLowerCase()}.</h2>
            <p>{exercise.id === 'prisma' || exercise.id === 'cilindro' ? 'La mejor forma de aprender cálculo es seguir practicando.' : 'La mejor forma de aprender geometría es seguir practicando.'}</p>
            <button onClick={onHome}>Elegir otro ejercicio <ArrowIcon /></button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [selected, setSelected] = useState<Exercise | null>(null)

  const goHome = () => {
    setSelected(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header onHome={goHome} detail={Boolean(selected)} />
      {selected ? <Detail exercise={selected} onHome={goHome} /> : <Home onSelect={setSelected} />}
      <footer>
        <span>forma³</span>
        <p>Geometría para entender, no para memorizar.</p>
        <small>Hecho para aprender con curiosidad.</small>
      </footer>
    </div>
  )
}
