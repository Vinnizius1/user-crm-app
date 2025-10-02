import { useState, useCallback } from "react";
import { useUsers } from "../hooks/useUsers";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import type { User } from "../types/User";

export default function Dashboard() {
  const { users, loading, error, reloadUsers, deleteUser } = useUsers();
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  // Esta função será chamada tanto na criação quanto na atualização/cancelamento
  const handleActionComplete = useCallback(() => {
    setUserToEdit(null); // Limpa o usuário em edição
    reloadUsers(); // Recarrega a lista
  }, [reloadUsers]);

  return (
    <div>
      <UserForm
        onActionComplete={handleActionComplete}
        userToEdit={userToEdit}
      />

      <h2>Lista de Usuários</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && !error ? (
        <p>Carregando usuários...</p>
      ) : users.length === 0 ? (
        <p>Nenhum usuário cadastrado ainda.</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => setUserToEdit(user)}
            onDelete={() => deleteUser(user.id)}
          />
        ))
      )}
    </div>
  );
}
