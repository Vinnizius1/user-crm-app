import { memo } from "react";
import type { User } from "../types/User";

interface Props {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

function UserCard({ user, onDelete, onEdit }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem 0",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <img
        src={user.avatarUrl}
        alt={`Avatar de ${user.name}`}
        width={64}
        height={64}
        style={{ borderRadius: "50%" }}
      />

      <div>
        <strong>{user.name}</strong>
        <br />
        📬 {user.email}
        <br />
        📍 {user.location}
        <br />
        <button
          onClick={onEdit}
          style={{ marginRight: "10px", marginTop: "10px" }}
        >
          Editar
        </button>
        <button onClick={onDelete} style={{ color: "red" }}>
          Deletar
        </button>
      </div>
    </div>
  );
}

export default memo(UserCard);
