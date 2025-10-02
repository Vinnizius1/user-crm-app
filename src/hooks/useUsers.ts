import { useCallback, useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { AxiosError } from "axios";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getUsers();
      // console.log("Dados carregados:", data);
      setUsers(data);
    } catch (err) {
      const defaultError =
        "Falha ao carregar os usuários. Tente novamente mais tarde.";

      if (err instanceof AxiosError && err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError(defaultError);
      }
      console.error("Erro detalhado ao carregar:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteUser = useCallback(
    async (id: number) => {
      if (!window.confirm("Tem certeza que deseja excluir este usuário?")) {
        return;
      }
      try {
        await deleteUser(id);
        await loadUsers(); // Recarrega a lista para refletir a exclusão
      } catch (err) {
        setError("Falha ao deletar o usuário.");
        console.error("Erro ao deletar:", err);
      }
    },
    [loadUsers]
  );

  // Efeito para carregar os dados na montagem inicial
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return {
    users,
    loading,
    error,
    reloadUsers: loadUsers,
    deleteUser: handleDeleteUser,
  };
}
