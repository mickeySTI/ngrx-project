import {
    onGetArticleAction,
    onGetArticleSuccessAction,
    onGetArticleFailureAction,
} from './../articles.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { ArticleInterface } from './../../../shared/models/article.interface';
export interface ArticleStateInterface {
    isLoading: boolean;
    error: string | null;
    data: ArticleInterface | null;
}

const initialState: ArticleStateInterface = {
    data: null,
    isLoading: false,
    error: null,
};

const articleReducer = createReducer(
    initialState,
    on(
        onGetArticleAction,
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        onGetArticleSuccessAction,
        (state, action): ArticleStateInterface => ({
            ...state,
            isLoading: false,
            data: action.article,
        })
    ),
    on(
        onGetArticleFailureAction,
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: false,
        })
    )
);

export function reducers(state: ArticleStateInterface, action: Action) {
    return articleReducer(state, action);
}
