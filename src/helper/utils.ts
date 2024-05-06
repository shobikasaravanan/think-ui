function capitalise(text:string)  {
    return text.toUpperCase()
}

function initialLetterCapitalise(text:string) {
    return text.charAt(0).toUpperCase()+text.slice(1)
}

function copyUrl(text:string = 'hi') {
  navigator.clipboard.writeText(text);
}

export { capitalise, initialLetterCapitalise, copyUrl }