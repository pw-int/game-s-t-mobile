function maskMobileNumberInput(a,b,c){a.unmask().mask(a.attr("data-input-mask"),{translation:{d:{pattern:/\d/},0:"",9:"","#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}})};