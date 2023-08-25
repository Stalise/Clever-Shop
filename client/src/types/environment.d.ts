type PathsVariablesType = 'NEXT_PUBLIC_CLOUDINARY';

type VariablesType = PathsVariablesType;

declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessEnv extends Record<VariablesType, string> {}
    }
}

export {};
