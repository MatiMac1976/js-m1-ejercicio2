function calcularDistribucionIngresos(ingresoTotal) {

    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroInversion = ingresoTotal * 0.2;

    return {
        gastosNecesarios,
        gastosOpcionales,
        ahorroInversion,
    };
}

function mostrarDistribucionIngresos() {
    const ingresoTotal = Number(prompt('Ingrese el Ingreso Total:'));
    if (isNaN(ingresoTotal) || ingresoTotal <= 0) {
        alert('Error: Ingrese un valor numérico válido y positivo.');
        return;
    }

    const distribucion = calcularDistribucionIngresos(ingresoTotal);

    alert(`Monto para Gastos Necesarios: $${distribucion.gastosNecesarios.toFixed(2)}
  Monto para Gastos Opcionales: $${distribucion.gastosOpcionales.toFixed(2)}
  Monto para Ahorro e Inversión: $${distribucion.ahorroInversion.toFixed(2)}`);
}

mostrarDistribucionIngresos();