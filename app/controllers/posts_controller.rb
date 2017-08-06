class PostsController < ApplicationController
  before_action :set_batch, only: [ :new, :create ]
  before_action :set_post, only: [ :show, :destroy ]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.batch = @batch
    @post.save
    redirect_to batches_path
  end

  def destroy
    @post.destroy
  end

  private

  def set_batch
    @batch = Batch.find(params[:batch_id])
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:name)
  end
end
