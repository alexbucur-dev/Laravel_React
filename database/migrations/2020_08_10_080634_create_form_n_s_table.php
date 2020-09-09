<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormNSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_n', function (Blueprint $table) {
            $table->id();
            $table->string('nume');
            $table->integer('numarcard');
            $table->integer('luna');
            $table->integer('anul');
            $table->integer('cvv');
            $table->string('imagine');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form_n');
    }
}
