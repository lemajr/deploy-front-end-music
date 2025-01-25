import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const genre = context.query.genre as string | undefined;
  
    return {
      props: {
        genre: genre || "rock", // Pass the genre to the component
      },
    };
  };
  