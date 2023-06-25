import TokenService from "@/services/token";
import { useLogout, useUser } from "./hooks";

export const UserModule = () => {
  const { data } = useUser();
  const { mutate } = useLogout();
  const handleLogout = () => {
    mutate(
      {
        refresh_token: TokenService.getRefreshToken(),
      },
      {
        onSuccess: () => {
          navigate("/", { replace: true });
        },
        onError: (error) => {
          setErrorMessage(error.response?.data?.message);
        },
      }
    );
  };
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <h1>Authenticated as {data?.user?.name}</h1>
      <span
        onClick={handleLogout}
        className="text-red-500 cursor-pointer my-4 font-medium"
      >
        Logout
      </span>
    </section>
  );
};
