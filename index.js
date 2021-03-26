function arrayToJsonFormater() {
  const products = ['preto-PP', 'preto-M', 'preto-G', 'preto-GG', 'preto-GG', 'branco-PP', 'branco-G', 'vermelho-M', 'azul-XG', 'azul-XG', 'azul-XG', 'azul-P'];

  const getSize = (value, type) => {
    return value.split('-')[type];
  };

  let object = {};

  const groupItens = products.reduce((r, a) => {
    let count = 0;
    let family = getSize(a, 0);
    let size = getSize(a, 1);

    products.forEach((item) => {
      if (item === `${family}-${size}`) count++;
    });

    object = {
      ...object,
      [family]: {
        ...object[family],
        [size]: count,
      },
    };

    return object;
  }, {});

  document.getElementById('yourArray').innerHTML = JSON.stringify(products);
  document.getElementById('yourJSON').innerHTML = JSON.stringify(groupItens);
}
