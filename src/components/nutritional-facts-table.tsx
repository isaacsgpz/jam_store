export const NutritionalFactsTable = () => {
  return (
    <div className="space-y-2">
      <div>
        <div>Porções por embalagem: 20</div>
        <div>Porção: 20g (1 colher de sopa)</div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nutriente</th>
            <th>Quantidade (por 100g)</th>
            <th>Quantidade (por 20g)</th>
            <th>%VD*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valor energético (kcal)</td>
            <td>115kcal</td>
            <td>23kcal</td>
            <td>1,15</td>
          </tr>
          <tr>
            <td>Carboidratos (g)</td>
            <td>18,5g</td>
            <td>3,7g</td>
            <td>0,19</td>
          </tr>
          <tr>
            <td>Açúcares totais (g)</td>
            <td>3,5g</td>
            <td>0,7g</td>
            <td>0,03</td>
          </tr>
          <tr>
            <td>Açúcares adicionados (g)</td>
            <td>00</td>
            <td>00</td>
            <td>**</td>
          </tr>
          <tr>
            <td>Proteínas (g)</td>
            <td>4,15g</td>
            <td>0,83g</td>
            <td>0,04</td>
          </tr>
          <tr>
            <td>Gorduras totais (g)</td>
            <td>2,9g</td>
            <td>0,57g</td>
            <td>0,02</td>
          </tr>
          <tr>
            <td>Gorduras saturadas (g)</td>
            <td>0,35g</td>
            <td>0,07g</td>
            <td>0,004</td>
          </tr>
          <tr>
            <td>Gorduras monoinsaturadas (g)</td>
            <td>1,15g</td>
            <td>0,23</td>
            <td>0,01</td>
          </tr>
          <tr>
            <td>Fibras alimentares (g)</td>
            <td>3,35g</td>
            <td>0,65g</td>
            <td>0,03</td>
          </tr>
          <tr>
            <td>Sódio (mg)</td>
            <td>2,1g</td>
            <td>0,41g</td>
            <td>0,02</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs">
        *% Valores Diários de referência com base em uma dieta de 2.000 kcal ou
        8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo
        de suas necessidades energéticas.
      </p>
    </div>
  )
}
