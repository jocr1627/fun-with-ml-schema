import { GraphQLResolveInfo } from 'graphql';
export declare type Resolver<Result, Parent = any, Context = any, Args = any> = (parent?: Parent, args?: Args, context?: Context, info?: GraphQLResolveInfo) => Promise<Result> | Result;
export declare type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
    subscribe<R = Result, P = Parent>(parent?: P, args?: Args, context?: Context, info?: GraphQLResolveInfo): AsyncIterator<R | Result>;
    resolve?<R = Result, P = Parent>(parent?: P, args?: Args, context?: Context, info?: GraphQLResolveInfo): R | Result | Promise<R | Result>;
};
export interface Query {
    generateJob?: GenerateJob | null;
    model?: Model | null;
    models?: (Model | null)[] | null;
    trainingJob?: TrainingJob | null;
}
export interface GenerateJob {
    errors: (string | null)[];
    id: string;
    status: JobStatus;
    text?: (string | null)[] | null;
}
export interface Model {
    id: string;
    name: string;
    urls: (string | null)[];
}
export interface TrainingJob {
    batch?: number | null;
    epoch?: number | null;
    errors?: (string | null)[] | null;
    id: string;
    loss?: number | null;
    status: JobStatus;
}
export interface Mutation {
    createModel?: Model | null;
    deleteModel?: Model | null;
    generateTextFromModel?: GenerateJob | null;
    trainModel?: TrainingJob | null;
    updateModel?: Model | null;
}
export interface Subscription {
    batchCompleted?: TrainingJob | null;
    textGenerated?: GenerateJob | null;
}
export interface GenerateJobInput {
    id: string;
}
export interface ModelInput {
    id: string;
}
export interface TrainingJobInput {
    id: string;
}
export interface CreateModelInput {
    name: string;
}
export interface DeleteModelInput {
    id: string;
}
export interface GenerateTextFromModelInput {
    count?: number | null;
    id: string;
    maxLength?: number | null;
    prefix?: string | null;
    temperature?: number | null;
}
export interface TrainModelInput {
    epochs?: number | null;
    id: string;
    force?: boolean | null;
    selectors?: (string | null)[] | null;
    url: string;
}
export interface UpdateModelInput {
    id: string;
    name: string;
}
export interface GenerateJobQueryArgs {
    input: GenerateJobInput;
}
export interface ModelQueryArgs {
    input: ModelInput;
}
export interface TrainingJobQueryArgs {
    input: TrainingJobInput;
}
export interface CreateModelMutationArgs {
    input: CreateModelInput;
}
export interface DeleteModelMutationArgs {
    input: DeleteModelInput;
}
export interface GenerateTextFromModelMutationArgs {
    input: GenerateTextFromModelInput;
}
export interface TrainModelMutationArgs {
    input: TrainModelInput;
}
export interface UpdateModelMutationArgs {
    input: UpdateModelInput;
}
export declare enum JobStatus {
    ACTIVE = "ACTIVE",
    DONE = "DONE",
    ERROR = "ERROR",
    PENDING = "PENDING"
}
export declare namespace QueryResolvers {
    interface Resolvers<Context = any> {
        generateJob?: GenerateJobResolver<GenerateJob | null, any, Context>;
        model?: ModelResolver<Model | null, any, Context>;
        models?: ModelsResolver<(Model | null)[] | null, any, Context>;
        trainingJob?: TrainingJobResolver<TrainingJob | null, any, Context>;
    }
    type GenerateJobResolver<R = GenerateJob | null, Parent = any, Context = any> = Resolver<R, Parent, Context, GenerateJobArgs>;
    interface GenerateJobArgs {
        input: GenerateJobInput;
    }
    type ModelResolver<R = Model | null, Parent = any, Context = any> = Resolver<R, Parent, Context, ModelArgs>;
    interface ModelArgs {
        input: ModelInput;
    }
    type ModelsResolver<R = (Model | null)[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type TrainingJobResolver<R = TrainingJob | null, Parent = any, Context = any> = Resolver<R, Parent, Context, TrainingJobArgs>;
    interface TrainingJobArgs {
        input: TrainingJobInput;
    }
}
export declare namespace GenerateJobResolvers {
    interface Resolvers<Context = any> {
        errors?: ErrorsResolver<(string | null)[], any, Context>;
        id?: IdResolver<string, any, Context>;
        status?: StatusResolver<JobStatus, any, Context>;
        text?: TextResolver<(string | null)[] | null, any, Context>;
    }
    type ErrorsResolver<R = (string | null)[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type StatusResolver<R = JobStatus, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type TextResolver<R = (string | null)[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
}
export declare namespace ModelResolvers {
    interface Resolvers<Context = any> {
        id?: IdResolver<string, any, Context>;
        name?: NameResolver<string, any, Context>;
        urls?: UrlsResolver<(string | null)[], any, Context>;
    }
    type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type UrlsResolver<R = (string | null)[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
}
export declare namespace TrainingJobResolvers {
    interface Resolvers<Context = any> {
        batch?: BatchResolver<number | null, any, Context>;
        epoch?: EpochResolver<number | null, any, Context>;
        errors?: ErrorsResolver<(string | null)[] | null, any, Context>;
        id?: IdResolver<string, any, Context>;
        loss?: LossResolver<number | null, any, Context>;
        status?: StatusResolver<JobStatus, any, Context>;
    }
    type BatchResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type EpochResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type ErrorsResolver<R = (string | null)[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type LossResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    type StatusResolver<R = JobStatus, Parent = any, Context = any> = Resolver<R, Parent, Context>;
}
export declare namespace MutationResolvers {
    interface Resolvers<Context = any> {
        createModel?: CreateModelResolver<Model | null, any, Context>;
        deleteModel?: DeleteModelResolver<Model | null, any, Context>;
        generateTextFromModel?: GenerateTextFromModelResolver<GenerateJob | null, any, Context>;
        trainModel?: TrainModelResolver<TrainingJob | null, any, Context>;
        updateModel?: UpdateModelResolver<Model | null, any, Context>;
    }
    type CreateModelResolver<R = Model | null, Parent = any, Context = any> = Resolver<R, Parent, Context, CreateModelArgs>;
    interface CreateModelArgs {
        input: CreateModelInput;
    }
    type DeleteModelResolver<R = Model | null, Parent = any, Context = any> = Resolver<R, Parent, Context, DeleteModelArgs>;
    interface DeleteModelArgs {
        input: DeleteModelInput;
    }
    type GenerateTextFromModelResolver<R = GenerateJob | null, Parent = any, Context = any> = Resolver<R, Parent, Context, GenerateTextFromModelArgs>;
    interface GenerateTextFromModelArgs {
        input: GenerateTextFromModelInput;
    }
    type TrainModelResolver<R = TrainingJob | null, Parent = any, Context = any> = Resolver<R, Parent, Context, TrainModelArgs>;
    interface TrainModelArgs {
        input: TrainModelInput;
    }
    type UpdateModelResolver<R = Model | null, Parent = any, Context = any> = Resolver<R, Parent, Context, UpdateModelArgs>;
    interface UpdateModelArgs {
        input: UpdateModelInput;
    }
}
export declare namespace SubscriptionResolvers {
    interface Resolvers<Context = any> {
        batchCompleted?: BatchCompletedResolver<TrainingJob | null, any, Context>;
        textGenerated?: TextGeneratedResolver<GenerateJob | null, any, Context>;
    }
    type BatchCompletedResolver<R = TrainingJob | null, Parent = any, Context = any> = SubscriptionResolver<R, Parent, Context>;
    type TextGeneratedResolver<R = GenerateJob | null, Parent = any, Context = any> = SubscriptionResolver<R, Parent, Context>;
}
