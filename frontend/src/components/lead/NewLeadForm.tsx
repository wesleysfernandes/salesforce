function NewLeadForm() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ minWidth: "400px" }}>
          <h2 className="text-center mb-4">Cadastro de lead</h2>
          <form>
            {/* Campo Nome */}
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nome do Cliente"
                required
              />
            </div>

            {/* Campo CPF */}
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                placeholder="000.000.000-00"
                required
              />
            </div>

            {/* Campo Data de Nascimento */}
            <div className="mb-3">
              <label htmlFor="nascimento" className="form-label">
                Data de Nascimento
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                required
              />
            </div>

            {/* Campo Renda */}
            <div className="mb-3">
              <label htmlFor="renda" className="form-label">
                Renda Mensal
              </label>
              <div className="input-group">
                <span className="input-group-text">R$</span>
                <input
                  type="number"
                  className="form-control"
                  id="income"
                  placeholder="0,00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Criar lead
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewLeadForm;
