import { withSSRContext } from "aws-amplify";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

export function withAuth(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const { Auth } = withSSRContext({ req });
    let user;
    try {
      user = await Auth.currentAuthenticatedUser();
      if (user) {
        const userData = await prisma?.user.findUnique({
          where: { id: user.getUsername() },
        });
        if (!userData && context.resolvedUrl.split("/")[1] !== "onboarding") {
          return {
            redirect: {
              destination: `/${context.locale}/onboarding`,
              statusCode: 302,
            },
          };
        }
      }
    } catch (err) {}
    if (!user) {
      // Redirect to login page
      return {
        redirect: {
          destination: `/${context.locale}/auth/sign-in`,
          statusCode: 302,
        },
      };
    }

    return await gssp(context); // Continue on to call `getServerSideProps` logic
  };
}
