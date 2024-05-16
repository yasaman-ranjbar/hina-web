import VerificationForm from "./_components/verification-form";

const Verify = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <VerificationForm mobile={searchParams['mobile'] as string} />;
};

export default Verify;
