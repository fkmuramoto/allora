class BatchesController < ApplicationController
  before_action :set_batch, only: [ :show, :destroy ]

  def index
    @batches = Batch.all
  end

  def show
  end

  def new
    @batch = Batch.new
  end

  def create
    @batch = Batch.new(batch_params)
    @batch.save
    redirect_to batches_path
  end

  def destroy
    @batch.destroy
  end

  private

  def set_batch
    @batch = Batch.find(params[:id])
  end

  def batch_params
    params.require(:batch).permit(:name)
  end
end
