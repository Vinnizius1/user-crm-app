import { useState, useEffect, memo } from "react";
import { createUser, updateUser } from "../services/userService";
import type { User } from "../types/User";

interface Props {
  onActionComplete: () => void; // Função para recarregar a lista e limpar o estado
  userToEdit: User | null;
}

function UserForm({ onActionComplete, userToEdit }: Props) {
  const isEditing = !!userToEdit;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Efeito para popular o formulário quando um usuário é selecionado para edição
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setLocation(userToEdit.location);
    } else {
      // Limpa o formulário quando o modo de edição é cancelado ou concluído
      setName("");
      setEmail("");
      setLocation("");
    }

    // Limpa o erro ao mudar de modo
    setError("");
  }, [userToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !location) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      const userData: Omit<User, "id"> = {
        name,
        email,
        location,
        // Mantém o avatar antigo na edição, ou gera um novo na criação
        avatarUrl: `https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(
          name
        )}`,
      };

      if (isEditing) {
        await updateUser(userToEdit.id, userData);
      } else {
        await createUser(userData);
      }

      onActionComplete(); // Dispara recarga da lista e cancela a edição
    } catch (err) {
      setError(`Erro ao ${isEditing ? "atualizar" : "cadastrar"} usuário.`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitButtonText = isEditing ? "Atualizar Usuário" : "Cadastrar";
  const loadingButtonText = isEditing ? "Atualizando..." : "Cadastrando...";

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {isEditing ? `Editando: ${userToEdit.name}` : "Cadastro de Usuário"}
      </h2>

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Localização"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? loadingButtonText : submitButtonText}
      </button>

      {isEditing && (
        <button type="button" onClick={onActionComplete} disabled={loading}>
          Cancelar
        </button>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default memo(UserForm);
