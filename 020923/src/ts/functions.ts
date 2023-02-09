const onButtonClick = (e: MouseEvent | TouchEvent) => {
    // console.log(e.currentTarget);
    const target = e.currentTarget as HTMLDivElement;
    if (!target.classList.contains("not-show") && !target.classList.contains("delete-sec")) {
        calculator.addOperator(target.textContent!);
    } else if (target.classList.contains("equal")) {
        calculator.calculate(true, true);
    } else if (target.classList.contains('backspace')) {
        calculator.deleteAllChars();
    }
    displayRes();
};

const displayRes = () => {
    resultElement.textContent = calculator.getOriginalInputs;
    liveResult.textContent = calculator.output;

}
