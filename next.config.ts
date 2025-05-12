module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',  // Aplica a todos os caminhos
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://192.168.1.4:3000, http://localhost:3000',  // Permitindo múltiplas origens
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS, PUT, DELETE',  // Métodos permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Custom-Header, X-Requested-With, Content-Type',  // Cabeçalhos permitidos
          },
        ],
      },
    ];
  },
};
