import { type LeadData, processData } from "../../services/CreateLead";
import { useState } from "react";

function NewLeadForm() {
  // Estados do formulário
  const [formData, setFormData] = useState<LeadData>({
    ownerName: "",
    cpf: "",
    birthDate: "",
    income: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Manipula mudanças nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validação básica
      if (
        !formData.ownerName ||
        !formData.cpf ||
        !formData.birthDate ||
        !formData.income
      ) {
        throw new Error("Todos os campos são obrigatórios");
      }

      // Chamada à API
      await processData(formData);
      setSuccess(true);

      // Limpa o formulário após sucesso
      setFormData({ ownerName: "", cpf: "", birthDate: "", income: "" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro desconhecido ao criar lead"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4">Cadastro de lead</h2>

        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="mb-3">
            <label htmlFor="ownerName" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="ownerName"
              placeholder="Nome do Cliente"
              value={formData.ownerName}
              onChange={handleChange}
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
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo Data de Nascimento */}
          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo Renda */}
          <div className="mb-3">
            <label htmlFor="income" className="form-label">
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
                value={formData.income}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Mensagens de status */}
          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {success && (
            <div className="alert alert-success mt-3">
              Lead criado com sucesso!
            </div>
          )}

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Enviando...
                </>
              ) : (
                "Criar lead"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewLeadForm;
